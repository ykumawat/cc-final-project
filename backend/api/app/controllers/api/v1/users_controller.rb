class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create, :index]

  def index
    @users = User.all
    render json: @users, status: 200
  end

  def create
    byebug
    user = User.new(user_params[:name], user_params[:email], user_params[:password])
    if user.save
      token = encode_token({user_id: user.id})
      render json: {user: user, jwt: token}, status: 201
    end
  end

  def edit
    user = User.find(params[:id])
  end


  def me
    if @current_user
      lists = @current_user.lists
      render json: {user: @current_user, lists: lists}, status: 201
    else
      render json: {message: "Error"}
    end
  end


  private

  def user_params
    params.permit(:email, :password, :name)
  end

end