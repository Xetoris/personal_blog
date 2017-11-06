Then(/^(?:He|She) sees the home page$/) do
  expect(Blog::FeaturesControls::Home::Home.visible?).to be true
end