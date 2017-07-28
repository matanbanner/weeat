class Restaurant < ApplicationRecord
  validates :name, {uniqueness: true, presence: true}
  validates :genre, presence: true
  validates :rating, {presence: true, numericality: { only_integer: true , greater_than_or_equal_to: 0, less_than_or_equal_to: 5}}
  validates :address, presence: true
  validates :delivery_time, {presence: true, numericality: { only_integer: true }}



end
