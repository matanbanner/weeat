json.extract! restaurant, :id, :name, :genre, :rating, :tenbis, :address, :delivery_time, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
