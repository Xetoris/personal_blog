require 'capybara/dsl'

module Blog
  module FeatureControls
    module Navigation

      # Control for navigating using the URL bar.
      class URLNavigation
        extend Capybara::DSL

        URLS ||= { home: '/' }

        class << self
          # Directs the browser to the associated relative url for the given key.
          #
          # @param key [Symbol]
          def navigate_to(key)
            url = get_url(key.to_sym)

            raise("You can't target a url with an <id>!") if /[<>]/ =~ url

            visit url
          end

          # Returns the associated relative URL for the given key.
          #
          # @param key [Symbol]
          #
          # @return [String]
          def get_url(key)
            raise("No URL specified for key: #{key}!") unless URLS.key?(key)

            URLS[key]
          end
        end
      end
    end
  end
end