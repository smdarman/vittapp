FROM node:16-alpine


WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Run the application.
CMD ["npm", "start"]
