class Api::V1::ToDoItemController < ApplicationController
  skip_before_action :authenticate

  def index
    @to_do_items = List.all
    render json: @to_do_items, status: 200
  end

  def create
    @to_do_items = ToDoItems.create(user_id: item_params[:user_id], item: item_params[:item], list_id: item_params[:list_id])
  end

  private

  def item_params
    params.permit(:user_id, :item, :list_id)
  end

end