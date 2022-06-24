class RecipesController < ApplicationController

    def index
        render json: Recipe.all
    end

    def show
        recipe = find_recipe
        render json: recipe
    end

    private

    def find_recipe
        Recipe.find(params[:id])
    end
    
end
