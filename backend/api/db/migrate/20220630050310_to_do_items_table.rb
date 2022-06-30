class ToDoItemsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :to_do_items do |t|
      t.string :item
      t.string :list_id
      t.string :user_id
      t.timestamps
    end
  end
end
