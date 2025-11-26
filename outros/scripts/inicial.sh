#!/bin/bash
set -e  # para execução em caso de erro

# ---------------------------
# Script simples de setup Codeverse
# ---------------------------

GREEN="\033[0;32m"
YELLOW="\033[1;33m"
CYAN="\033[0;36m"
RESET="\033[0m"

echo -e "${CYAN}🚀 Iniciando setup do projeto Codeverse...${RESET}"

# Verifica se Node.js está instalado
if ! command -v node &> /dev/null
then
    echo -e "${YELLOW}⚠️ Node.js não encontrado!${RESET}"
    echo "Por favor, instale o Node.js antes de continuar:"
    echo "https://nodejs.org/"
    exit 1
fi

# Baixa os arquivos na pasta atual
echo -e "${YELLOW}⬇️ Baixando arquivos JavaScript...${RESET}"

curl -fsSLO https://script.codeverse.dev.br/inicial.js
curl -fsSLO https://script.codeverse.dev.br/support.js
curl -fsSLO https://script.codeverse.dev.br/ultimo.js

echo -e "${GREEN}✅ Arquivos baixados com sucesso!${RESET}"

# Executa o script inicial
echo -e "${CYAN}▶️ Executando inicial.js...${RESET}"
node inicial.js

echo -e "${GREEN}🎉 Setup concluído! Agora verifique se precisa de ajuste no prisma! E execute -> node ultimo.js${RESET}"
