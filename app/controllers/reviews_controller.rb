class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def show
        review = find_review
        render json: review
    end

    def updated
        review = find_review
        review.update(review_params)
        render json: review
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def delete
        review = find_review
        review.destroy
        head :no_content
    end

    private 

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit([:comment, :user_id, :recipe_id])
    end
end
