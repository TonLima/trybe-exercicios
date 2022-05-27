/*

1-🚀 No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

2-🚀 Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes.
Confira se existe algum comando para baixar a imagem localmente sem ter que criar um contêiner para isso.

docker pull debian:stable-slim

3-🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

4-🚀 Após baixar a imagem para seu computador local, crie e execute um contêiner no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

docker container run -it debian


5-🚀 No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner.

6-🚀 Encerre o terminal.

exit

7-🚀 Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.

docker container ls -a

8-🚀 Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.

docker container start 0552075b7042

9-🚀 Retome o contêiner que foi criado anteriormente neste exercício.

docker attach 0552075b7042

10-🚀 Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner.

11-🚀 Encerre o terminal.

exit

12-🚀 Remova somente o contêiner criado para esse exercício.

docker container rm 0552075b7042

13-[BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.

docker container run -it andrius/ascii-patrol

14-[BÔNUS] **Encerre o contêiner utilizando os botões [ctrl] + [c].

*/

/* testando o push*/