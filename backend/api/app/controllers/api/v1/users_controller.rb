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
    if @user
      lists = load_user_lists(@user)
      render json: {user: @user, lists: load_user_lists}, status: 201
    else
      render json: {message: "Error"}
    end
  end


  private

  def user_params
    params.permit(:email, :password, :name)
  end
  
  def load_user_lists(user)
   pref_objs = {lists: []}
   user.user_prefs.each do |user_pref|
      if user_pref[:list_id]
        list = Lists.all.find(user_pref[:list_id])
        pref_objs[:lists].push({list_info: list})
      end
    end
    return pref_objs
  end

end