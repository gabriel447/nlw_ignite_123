node -v
v18.13.0

npm -v
8.19.3

npm init -y
npm i fastify
npm i typescript -D

npx tsc --init
npm i tsx -D

npm run dev

npm i -D prisma
npm i @prisma/client

npx prisma init --datasource-provider SQLite
npx prisma migrate dev -> create habits
npx prisma studio

npm i @fastify/cors

__________________________________________________________

git clone

npm i

npm run dev

.env -> DATABASE_URL="file:./dev.db"

npx prisma migrate dev -> create the rest of the tables

npx prisma studio