module Blog
  module Controls
    module URLNavigation
      URLS = { home: '/' }

      # Navigates to the url associated with the given key.
      #
      # @param key [Symbol]
      def navigate_to(key)
        visit get_url(key)
      end

      # Retrieves the associated relative url by key.
      #
      # @param key [Symbol]
      #
      # @return [String]
      def get_url(key)
        key = key.to_sym

        URLS[key]
      end
    end
  end
end