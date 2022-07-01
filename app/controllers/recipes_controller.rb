class RecipesController < ApplicationController

    def index
        render json: Recipe.all
    end

    def show
        recipe = find_recipe
        render json: recipe
    end
    
    def create
        @recipe = Recipe.new(recipe_params)
        @recipe.save!
        render json: @recipe, status: :created

    end

    def destroy
        recipe = find_recipe
        recipe.destroy
        head :no_content
    end

    private

    def find_recipe
        Recipe.find(params[:id])
    end

    def recipe_params
        params.permit(:name, :img_url, :link, :category_id)
    end
    
end
