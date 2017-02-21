directory "_data/" do
  create_data_file("site.yml", :yaml, dato.site.to_hash)

  dato.single_instance_item_types.each do |item_type|
    item = dato.items_of_type(item_type).first
    create_data_file("#{item_type.api_key}.yml", :yaml, item.to_hash) if item
  end
end

dato.collection_item_types.each do |item_type|
  directory "_#{item_type.api_key.pluralize}/" do
    dato.items_of_type(item_type).each do |item|
      create_post "#{item.slug}.md" do
        frontmatter :yaml, item.to_hash
      end
    end
  end
end
