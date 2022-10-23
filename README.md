# 🌮 Tacokalkulator 3 🌮

En revolusjon innen tacokalkulering

## 📦 Installasjon
Du må ha [Deno](https://deno.land/) og [Yarn](https://yarnpkg.com/getting-started/install) installert. (Jada, beklager at du må ha Deno _og_ node. Ville ha Deno til tjeneren, men ville ikke messe med Deno-Vite-Svelte-klientside).

### Klientside
```bash
cd client
yarn install
```

### Tjenerside
Ikke noe mer enn at du må ha Deno og internett ;)

## 🚀 Kjør da!

### Klientside
```bash
cd client
yarn dev
```

### Tjenerside
```bash
cd server
deno run --allow-net --watch index.ts
```