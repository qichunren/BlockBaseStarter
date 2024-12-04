require "test_helper"

module Api
  class AuthControllerTest < ActionDispatch::IntegrationTest
    test "should register new user" do
      assert_difference("User.count") do
        post api_register_path, params: {
          email: "test@example.com",
          password: "password123",
          password_confirmation: "password123"
        }, as: :json
      end

      assert_response :created
      assert_not_nil response.parsed_body["token"]
    end

    test "should not register user with invalid email" do
      post api_register_path, params: {
        email: "invalid-email",
        password: "password123",
        password_confirmation: "password123"
      }, as: :json

      assert_response :unprocessable_entity
      assert_includes response.parsed_body["message"], "Email is invalid"
    end

    test "should not register user with mismatched passwords" do
      post api_register_path, params: {
        email: "test@example.com",
        password: "password123",
        password_confirmation: "different123"
      }, as: :json

      assert_response :unprocessable_entity
      assert_includes response.parsed_body["message"], "Password confirmation doesn't match"
    end

    test "should login with valid credentials" do
      user = User.create!(
        email: "test@example.com",
        password: "password123",
        password_confirmation: "password123"
      )

      post api_login_path, params: {
        email: user.email,
        password: "password123"
      }, as: :json

      assert_response :success
      assert_not_nil response.parsed_body["token"]
    end

    test "should not login with invalid password" do
      user = User.create!(
        email: "test@example.com",
        password: "password123",
        password_confirmation: "password123"
      )

      post api_login_path, params: {
        email: user.email,
        password: "wrong_password"
      }, as: :json

      assert_response :unauthorized
      assert_equal I18n.t("api.auth.invalid_credentials"), response.parsed_body["message"]
    end

    test "should not login with non-existent email" do
      post api_login_path, params: {
        email: "nonexistent@example.com",
        password: "password123"
      }, as: :json

      assert_response :unauthorized
      assert_equal I18n.t("api.auth.invalid_credentials"), response.parsed_body["message"]
    end
  end
end
