class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]
  
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      token = JWT.encode({user_id: user.id}, "coding")
      render json: {user: user, jwt: token}
    end
  end
end