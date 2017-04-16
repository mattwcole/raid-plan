desc 'Restore NuGet and NPM packages'
task :restore do
  dotnet 'restore'
  yarn 'install'
end

desc 'Run all unit tests'
task :test do
  Dir.glob('test/**/*.csproj') do |test_project|
    dotnet "test #{test_project} -c Release"
  end

  yarn 'lint'
  yarn 'test'
end

desc 'Packages application into deployable'
task :package do
  yarn 'build -- --output-path ../RaidPlan.Host/wwwroot'
  dotnet 'publish src/RaidPlan.Host -c Release'
end

def dotnet(args)
  sh "dotnet #{args}"
end

def yarn(args)
  Dir.chdir('src/RaidPlan.App') do
    sh "yarn #{args}"
  end
end
