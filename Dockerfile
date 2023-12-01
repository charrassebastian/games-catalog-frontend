FROM node:lts-hydrogen
WORKDIR app
COPY . ./
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "dev", "--", "--host", "--port", "8080"]
