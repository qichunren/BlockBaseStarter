namespace :credentials do
  desc "Display all credentials"
  task show: :environment do
    puts JSON.pretty_generate(Rails.application.credentials.config)
  end
end
