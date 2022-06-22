class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :link, :category_id
end
