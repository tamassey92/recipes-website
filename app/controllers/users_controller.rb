class UsersController < ApplicationController

    before_action :is_authorized?, except: [:create]
    before_action :is_admin?, only: [:update, :destroy]

    # GET "/users"
    def index 
        render json: User.all
    end 
    
    # GET "/users/:id"
    def show
        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end 
    
    # POST "/users"
    def create
        @user = User.new(username: user_params[:username])
        @user.password = user_params[:password]
        @user.save!
        session[:current_user] = @user.id
        session[:login_attempts] = 0
        render json: @user, status: :created
      end

    # PUT "/users/:id"
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end
    
    # DELETE "/users/:id"
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
