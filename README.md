# Riad Plan

## Contributing

### Prerequisites

- [NodeJS](https://nodejs.org/en/) v6.10.x
- [.NET Core](https://www.microsoft.com/net/download) 1.0.1 or later
- [yarn](https://yarnpkg.com/lang/en/) 0.23.x

### Running

To run the app you need to install NuGet packages, NPM packages, build the client app and run the host.

```sh
dotnet restore
cd src/RaidPlan.App
yarn
yarn build
cd ../RaidPlan.Host
dotnet run
```
_Note that the `ASPNETCORE_ENVIRONMENT` environment variable should be set to `Development`. This can be achieved most easily by exporting it in `~/.bashrc` or similar._
