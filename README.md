# Binar Challenge Chapter 9

Ini adalah repository yang berisi challenge chapter 9. Di dalam nya berisi project berbasis React.js untuk pembuatan `Landing Page`, `Register Page`, `Login Page`, `Edit Player`, dan juga `Game Page`.

## Installation

Pertama, anda harus cloning resource dari repository ini dengan cara :

```bash
git clone https://github.com/fureya48/binar-challenge-chapter-9.git;
```

Kemudian ikuti cara berikut :

```bash
git flow init;
git checkout develop;
git pull -u origin develop;
```

Jika ingin menambahkan fitur baru, gunakan cara ini :

```bash
git flow feature start [nama_feature];
```

Jika sudah selesai menambahkan feature, gunakan cara ini :

```bash
git add .;
git commit -m "commit messagenya";
git flow feature finish [nama_feature];
```

Push fitur baru menggunakan cara ini :

```bash
git checkout develop;
git push -u develop;
```

## Usage

Pertama kali yang harus anda lakukan setelah mengcloning repostirory ini adalah menginstall node_modules agar dapat dijalankan.

```bash
npm install;

# jika sudah maka jalankan React nya
npm start

# jika ingin menjalankan server
cd server
npm start

```

## Technology

- **React JS**
- **Node JS**
- **Express JS**
- **PostgreSQL**

## What's Next?

Aplikasi ini akan di deploy ke server.
