class ChangeDeliveryTimeType < ActiveRecord::Migration[5.0]
  def change
    change_column :restaurants, :delivery_time, :integer
  end
end
