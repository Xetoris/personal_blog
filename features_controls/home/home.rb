require 'capybara/dsl'

module Blog
  module FeaturesControls
    module Home
      class Home
        extend Capybara::DSL

        class << self

          # @return [Boolean]
          def visible?
            !control.nil?
          end

          # @return [Capybara::Node::Element]
          def control
            first('h1', text: /blog/i, minimum: 1, wait: 5)
          end
        end

        private_class_method :control
      end
    end
  end
end