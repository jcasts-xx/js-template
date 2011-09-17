guard 'coffeescript', :output => 'public/js' do
  watch(%r{^app/coffee/(.*)\.coffee$})
end

guard 'coffeescript', :output => 'spec/js' do
  watch(%r{^spec/coffee/(.*)\.coffee$})
end

guard 'livereload', :apply_js_live => false do
  watch(%r{(public/|spec/).+\.(html)})
  watch(%r{^spec/js/.+\.js$})
  watch(%r{^public/js/.+\.js$})
end