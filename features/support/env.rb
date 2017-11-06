require 'capybara'
require 'capybara/cucumber'
require_relative '../../config/environment'
require_relative '../../features_controls/controls'

module Cucumber
  module Hanami
    class World
      include Capybara::DSL
    end
  end
end

World do
  Capybara.app = Hanami.app
  Cucumber::Hanami::World.new
end

Capybara.register_driver(:blog_driver) do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

Capybara.default_driver = :blog_driver
Capybara.javascript_driver = :blog_driver