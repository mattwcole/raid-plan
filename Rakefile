desc 'Restore NuGet and NPM packages'
task :restore do
  dotnet 'restore'
  yarn 'install'
end

desc 'Run all unit tests'
task :test do
  echo 'TODO: Run all unit tests'
end

def dotnet(args)
  sh "dotnet #{args}"
end

def yarn(args)
  Dir.chdir('src/RaidPlan.App') do
    sh "yarn #{args}"
  end
end
