// index.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rotas da API para Currículos (Users)
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        contactInfo: true, languages: true, educations: true, experiences: true,
        skills: true, projects: true, courses: true, events: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error('Erro ao buscar todos os usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor ao buscar usuários.' });
  }
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        contactInfo: true, languages: true, educations: true, experiences: true,
        skills: true, projects: true, courses: true, events: true,
      },
    });
    if (!user) {
      return res.status(404).json({ error: 'Currículo não encontrado.' });
    }
    res.json(user);
  } catch (error) {
    console.error(`Erro ao buscar usuário ${id}:`, error);
    res.status(500).json({ error: 'Erro interno do servidor ao buscar usuário.' });
  }
});

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, phone, linkedin, github, bio,
          contactInfo, languages, educations, experiences, skills, projects, courses, events } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        firstName, lastName, email, phone, linkedin, github, bio,
        contactInfo: contactInfo ? { create: contactInfo } : undefined,
        languages: languages ? { createMany: { data: languages } } : undefined,
        educations: educations ? { createMany: { data: educations } } : undefined,
        experiences: experiences ? { createMany: { data: experiences } } : undefined,
        skills: skills ? { createMany: { data: skills } } : undefined,
        projects: projects ? { createMany: { data: projects } } : undefined,
        courses: courses ? { createMany: { data: courses } } : undefined,
        events: events ? { createMany: { data: events } } : undefined,
      },
      include: {
        contactInfo: true, languages: true, educations: true, experiences: true,
        skills: true, projects: true, courses: true, events: true,
      }
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return res.status(409).json({ error: 'Este email já está em uso.' });
    }
    res.status(500).json({ error: 'Erro interno do servidor ao criar usuário.' });
  }
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { contactInfo, educations, experiences, skills, projects, courses, events, languages, ...userData } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...userData,
        contactInfo: contactInfo ? {
          upsert: {
            create: contactInfo,
            update: contactInfo,
          }
        } : undefined,
      },
      include: {
        contactInfo: true, languages: true, educations: true, experiences: true,
        skills: true, projects: true, courses: true, events: true,
      }
    });
    res.json(updatedUser);
  } catch (error) {
    console.error(`Erro ao atualizar usuário ${id}:`, error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Currículo não encontrado para atualização.' });
    }
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return res.status(409).json({ error: 'Este email já está em uso por outro usuário.' });
    }
    res.status(500).json({ error: 'Erro interno do servidor ao atualizar usuário.' });
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.contactInfo.deleteMany({ where: { userId: id } });
    await prisma.language.deleteMany({ where: { userId: id } });
    await prisma.education.deleteMany({ where: { userId: id } });
    await prisma.experience.deleteMany({ where: { userId: id } });
    await prisma.skill.deleteMany({ where: { userId: id } });
    await prisma.project.deleteMany({ where: { userId: id } });
    await prisma.course.deleteMany({ where: { userId: id } });
    await prisma.event.deleteMany({ where: { userId: id } });

    await prisma.user.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    console.error(`Erro ao deletar usuário ${id}:`, error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Currículo não encontrado para exclusão.' });
    }
    res.status(500).json({ error: 'Erro interno do servidor ao deletar usuário.' });
  }
});

app.post('/users/:userId/experiences', async (req, res) => {
  const { userId } = req.params;
  const experienceData = req.body;
  try {
    const newExperience = await prisma.experience.create({
      data: {
        ...experienceData,
        userId: userId,
      },
    });
    res.status(201).json(newExperience);
  } catch (error) {
    console.error(`Erro ao adicionar experiência ao usuário ${userId}:`, error);
    res.status(500).json({ error: 'Erro interno do servidor ao adicionar experiência.' });
  }
});

app.delete('/experiences/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.experience.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    console.error(`Erro ao deletar experiência ${id}:`, error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Experiência não encontrada para exclusão.' });
    }
    res.status(500).json({ error: 'Erro interno do servidor ao deletar experiência.' });
  }
});

app.get('/', (req, res) => {
  res.send('API de Currículo Express está funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});