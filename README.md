# IdNotepad

![notepad](./docs/idnotepad.png)

Esse projeto bloco de notas, é para anotar algumas tarefas e colocar prioridades na hora de executar simbolizando as prioridades com as cores.

![Home](./docs/idnotepad.png)

---

**Para iniciar o projeto**

```bash
 yarn global add expo-cli
```

```bash
yarn start
```

```bash
 yarn android
```

Tem que ter o [docker](https://docs.docker.com/get-docker/) instalado, e rodar o [backend do app](https://github.com/Thales-Eduardo/Backend-IdNotepad).

```bash
docker-compose up -d
```

```bash
adb reverse tcp:3333 tcp:3333
```
