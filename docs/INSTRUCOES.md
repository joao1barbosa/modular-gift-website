# 📖 Guia de Personalização

Este guia explica como você pode criar o seu próprio app de presente personalizado usando este container, sem precisar programar.

## 1. Prepare suas Pastas
Crie uma pasta no seu computador para o projeto. Dentro dela, crie duas subpastas:
- `bg-photos`: Coloque aqui todas as fotos que você quer que fiquem flutuando na primeira página.
- `res-file`: Coloque aqui a foto **OU** o vídeo que deve aparecer quando a pessoa clicar em "SIM".

## 2. Configure os Textos e Cores
No seu arquivo `docker-compose.yml`, altere os valores depois do sinal de `=` :

- `VITE_QUESTION`: Escreva a sua pergunta.
- `VITE_RESPONSE_TEXT`: Escreva o título da mensagem de sucesso.
- `VITE_RESPONSE_SUBTEXT`: Escreva o subtítulo da mensagem.
- `VITE_RESPONSE_TYPE`: Escreva `IMAGE` se a resposta for foto, ou `VIDEO` se for vídeo.
- `VITE_RESPONSE_VALUE`: Caso não seja um arquivo, adicione o valor da resposta aqui (código, texto, vídeo do youtube).
- `VITE_BACKGROUND_COLOR`: Escolha uma cor (ex: `#ff0000` para vermelho, `#000000` para preto).
- `VITE_YOUTUBE_URL`: Link da música da página de resposta (YouTube).
- `VITE_ONLY_DESKTOP`: Deve ou não bloquear a aplicação para dispositivos pequenos.


## 3. Dicas de Arquivos
- **Tamanho:** Fotos e vídeos muito pesados podem demorar a carregar no navegador. Tente usar arquivos otimizados.
- **Razão:** Aplicação foi feita focada em fotos com razão 1:1. Fotos com razões diferentes podem muito destorcidas.
- **Música:** Copie o link completo de um vídeo do YouTube para a variável `VITE_YOUTUBE_URL`.

## 4. Como Iniciar

Com o terminal aberto na pasta do projeto, digite:
```sh
docker-compose up -d
```
Depois, abra o seu navegador e acesse: `http://localhost:8080`
