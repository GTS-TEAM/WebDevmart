import axios from "axios";
import NextAuth from "next-auth/next";
import jwt_decode, { JwtPayload } from "jwt-decode";
import CredentialsProvider from "next-auth/providers/credentials";
import { ResLogin, Token } from "../../../shared/share";
import { BASE_URL, ROUTES } from "../../../constaint/constant";
import { JWT } from "next-auth/jwt";

async function refreshAccessToken(token: JWT) {
  const tokenData: Token = await axios
    .post(`${BASE_URL}/auth/refresh-token`, {
      refresh_token: token.refreshToken,
    })
    .then((value) => value.data.data);

  const { access_token: accessToken, refresh_token: refreshToken } = tokenData;
  const accessTokenExpirationTime =
    (jwt_decode<JwtPayload>(accessToken).exp as number) * 1000 - 10; // 10 seconds before expiration
  //We return the token object with the new access token and the new refresh token.
  return {
    ...token, //We keep the old refresh token.
    accessToken, //The new access token
    accessTokenExpires: accessTokenExpirationTime, //We add the expiration time to the token object.
    refreshToken: refreshToken ?? token.refreshToken, //If the refresh token is null, we keep the old one.
  };
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      //init object credentials for authorize
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@devmart.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        try {
          const data: ResLogin = await axios
            .post(`${BASE_URL}/auth/login`, {
              email: credentials?.email,
              password: credentials?.password,
              role: "customer",
            })
            .then((res) => {
              return res.data.data; //return the data from the server response (token, user) as a object (token, user) with the type ResLogin
            });

          if (data) {
            const { access_token: accessToken, refresh_token: refreshToken } =
              data.token; //We get the access token and the refresh token from the data object.

            const accessTokenExpirationTime =
              (jwt_decode<JwtPayload>(accessToken).exp as number) * 1000 - 10;
            //minus 10 seconds before expiration time to prevent token expiration error in the browser side unit ms

            return {
              ...data.user,
              accessToken,
              accessTokenExpires: accessTokenExpirationTime,
              refreshToken,
            };
            //return new object user contain token
          }
          return null; //if the data is null, return null
        } catch (e: any) {
          throw new Error(e.response.data.message); //if the server response is an error, throw an error with the message from the server
        }
      },
    }),
  ],
  callbacks: {
    //The jwt() callback is called when a new token is created.
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user,
        };
      }
      return token;
    },
    //The session() callback is called when a user logs in or log out
    async session({ session, token }) {
      //@ts-ignore
      if (session) {
        return {
          ...session,
          token,
        };
      }
      return session;
    },
  },
  //The signIn page is the page that the user is redirected to when they are not logged in.
  pages: {
    signIn: ROUTES.LOGIN,
  },
  secret: "next-auth-secret", //The secret is used to sign the tokens. It should be a long random string.
});
