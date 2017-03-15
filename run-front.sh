#!/bin/bash
# Esse arquivo deve estar dentro da pasta robcar-mechanical
echo "Informe seu user do github:"
read user;
echo "Informe seu e-mail do github "
read email;
echo "Informe sua senha do github "
read senha;
# Configura name e email do user utilizado no github
git config --global user.name "$user"
git config --global user.email "$email"
git config --global user.senha "$senha"
mkdir front 
cd front
git init
# Desabilita verificação HTTP e SSL
git config http.sslVerify false
git remote add origin https://"$user":"$senha"@github.com/robcar-mechanical/front.git
git pull origin develop
git checkout develop
# Devido a falta do certificado, não é possivel instalar dependência do npm
npm set strict-ssl false
echo "instalando o bower"
npm install -g bower
bower install
start sh.exe --login -i
echo "Finalizado com sucesso!"
pause