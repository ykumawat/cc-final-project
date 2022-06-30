class ListsTable < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :list_name
      t.string :user_id

      t.timestamps
    end
  end
end
