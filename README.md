# Raid Plan

[![Build Status](https://travis-ci.org/mattwcole/raidplan.svg?branch=master)](https://travis-ci.org/mattwcole/raidplan)
[![dependencies Status](https://david-dm.org/mattwcole/raidplan/status.svg?path=src/RaidPlan.App)](https://david-dm.org/mattwcole/raidplan?path=src/RaidPlan.App)

## Contributing

### Prerequisites

- [NodeJS](https://nodejs.org/en/) v6.x
- [.NET Core](https://www.microsoft.com/net/download)
- [yarn](https://yarnpkg.com/lang/en/)

There is currently [an issue](https://github.com/dotnet/cli/issues/6178) with VS2017 docker projects breaking the dotnet CLI due to a missing SDK. Windows users can follow [this step](https://github.com/dotnet/cli/issues/6178#issuecomment-297040789) to work around. Linux/Mac users can copy the missing SDK from the [`aspnetcore-build` docker image](https://hub.docker.com/r/microsoft/aspnetcore-build/).

### Running

```sh
dotnet restore RiadPlan.sln
cd src/RaidPlan.Host
dotnet run
```

The `ASPNETCORE_ENVIRONMENT` environment variable must be set to `Development` when running locally. This can be achieved most easily by exporting it in `~/.bashrc` or similar.
