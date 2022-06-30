class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable
  has_secure_password
  has_many :contacts
  has_many :to_do_items
  has_many :lists

  has_many :newsfeed_posts
end