[![Build Status](https://travis-ci.org/innowatio/iwwa-lambda-events-subset-pipe.svg?branch=master)](https://travis-ci.org/innowatio/iwwa-lambda-events-subset-pipe)
[![codecov.io](https://codecov.io/github/innowatio/iwwa-lambda-events-subset-pipe/coverage.svg?branch=master)](https://codecov.io/github/innowatio/iwwa-lambda-events-subset-pipe?branch=master)
[![Dependency Status](https://david-dm.org/innowatio/iwwa-lambda-events-subset-pipe.svg)](https://david-dm.org/innowatio/iwwa-lambda-events-subset-pipe)
[![devDependency Status](https://david-dm.org/innowatio/iwwa-lambda-events-subset-pipe/dev-status.svg)](https://david-dm.org/innowatio/iwwa-lambda-events-subset-pipe#info=devDependencies)


# iwwa-lambda-events-subset-pipe

Dispatch some events (readings) into another stream.

## Deployment

This project deployment is automated with Lambdafile. For more info [`lambda-boilerplate`](https://github.com/lk-architecture/lambda-boilerplate/).

### Configuration

The following environment variables are needed to configure the function:

- `KINESIS_STREAM_NAME` __string__ *required*: the destination stream name.
- `DEBUG` __boolean__ *optional*: set to `true` if you want more log from [`kinesis-router`](https://github.com/lk-architecture/kinesis-router/).

### Run test

Run the `npm run test` command.
