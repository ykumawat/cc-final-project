class Api::V1::ListsController < ApplicationController
  skip_before_action :authenticate

  def index
    @lists = List.all
    render json: @lists, status: 200
  end

  def create
    @list = Lists.create(user_id: list_params[:user_id], list_name: list_params[:list_name])
  end

  private

  def list_params
    params.permit(:user_id, :list_name)
  end

end