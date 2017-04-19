class RetaurantUniqueName < ActiveRecord::Migration[5.0]
  def change
    add_index :restaurants, :name, :unique => true
  end
end
