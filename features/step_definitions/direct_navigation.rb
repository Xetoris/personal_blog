And(/^(?:He|She) visits the home page$/) do
  Blog::FeatureControls::Navigation::URLNavigation.navigate_to(:home)

  expect(Blog::FeaturesControls::Home::Home.visible?).to be true
end