## get started
Get latest docker


Create `.env` file
```
NODE_ENV=development
NODE_ENV_PROD=production
POSTGRES_USER=appuser
POSTGRES_DB=appdb
NODE_PROD_PORT=8000

```

Start dev server:
```sh
./bin/develop.sh
```
Wait for docker to set up dev env, then open [http://localhost:8000](http://localhost:8000)

## install dependencies

```sh
# frontend
./bin/npm_frontend.sh install [package] --save-dev

# backend
./bin/npm_backend.sh install [package] --save
```

## database management

```sh
# open psql session
./bin/psql.sh

# create a backup in backups dir
./bin/backup.sh

# restore from a backup in backups dir (server must be stopped)
./bin/restore.sh backups/somebackup.bak
```



## config

Config files for backend are located at `config/*.json`.  
If `config/[NODE_ENV].json` exists, values are loaded from it first. Then defaults are filled in from `config/default.json`;

## logging

[Winston](https://github.com/winstonjs/winston) is used for logging. Loggers and transport are configured via config files, see `config/default.json`.


## migrations

```sh
# create new migration
./bin/sequelize.sh migration:create --name some_migration

# run migrations
./bin/sequelize.sh db:migrate
```
