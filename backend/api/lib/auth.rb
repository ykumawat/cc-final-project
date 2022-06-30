# require 'jwt'
# 
# class Auth
# 
#   ALGORITHM = 'HS256'
# 
#   def self.issue(payload)
#     JWT.encode(payload, Rails.application.secrets.AUTH_SECRET.to_s, ALGORITHM)
#   end
# 
#   def self.decode(token)
#     JWT.decode(token, Rails.application.secrets.AUTH_SECRET.to_s, { algorithm: ALGORITHM })
#     # decoded_token = JWT.decode token, Rails.application.secrets.AUTH_SECRET.to_s, true, { algorithm: ALGORITHM }
#     puts decoded_token
#   end
# 
#   # def self.auth_secret
#   #   ENV["AUTH_SECRET"]
#   # end
# 
# end