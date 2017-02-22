
dato.collection_item_types.each do |item_type|
  directory "_content/#{item_type.api_key.pluralize}/" do
    dato.items_of_type(item_type).each do |item|
      create_post "#{item.slug}.md" do
        frontmatter :yaml, item.to_hash
      end
    end
  end
end



# dato.config.rb

create_data_file "_content/site.yml", :yaml, dato.site.to_hash
dato.item_types.each do |item_type|
  create_data_file "_content/#{item_type.api_key}.yml", :yaml,
    dato.items_of_type(item_type).map(&:to_hash)
end
