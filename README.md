# Riad Plan

[![Build Status](https://travis-ci.org/mattwcole/raidplan.svg?branch=master)](https://travis-ci.org/mattwcole/raidplan)

## Contributing

### Prerequisites

- [NodeJS](https://nodejs.org/en/) v6.x
- [.NET Core](https://www.microsoft.com/net/download)
- [yarn](https://yarnpkg.com/lang/en/)

### Running

To run the app you need to install NuGet packages, NPM packages, build the client app and run the host.

```sh
dotnet restore RiadPlan.sln
cd src/RaidPlan.App
yarn
yarn build
cd ../RaidPlan.Host
dotnet run
```

_Note that the `ASPNETCORE_ENVIRONMENT` environment variable should be set to `Development`. This can be achieved most easily by exporting it in `~/.bashrc` or similar._
