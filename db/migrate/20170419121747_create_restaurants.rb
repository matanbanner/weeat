class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :genre
      t.integer :rating
      t.boolean :tenbis
      t.string :address
      t.string :delivery_time

      t.timestamps
    end
  end
end
