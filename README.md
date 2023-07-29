# THBL Manager
## Version 1.0
#### by Trekker Holdings, using [o7-app](https://github.com/ottomated/create-o7-app)

---

### Companion management dashboard for [THBioLink](https://github.com/TrekkerStudios/THBioLink)

---

# How to get it working

### Install
Clone the repo and install:

```pnpm install```

### .env
Once you make an Upstash database, copy the REST URL and token and put them in your environment:
```
UPSTASH_REDIS_REST_URL = "https://urlfromupsta.sh"
UPSTASH_REDIS_REST_TOKEN = "T0K3N_FR0M_UPST@SH"
```

...as well as set a login:
```
LOGIN = username:p@ssw0rd
```

### How to add data
The TRPC callback will look for the keys described in `page.server.ts` and parse the data into the page expecting an array of JSON objects for each section. Refer to THBioLink for how the JSON objects should be constructed.

```
const <key_socials> = ['key.socials', await trpcServer.fetchKV.ssr({ table: 'key.socials' }, event)];
await key_socials[1].sort((a, b) => (a.id > b.id) ? 1 : -1);
```
