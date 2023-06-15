import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Dashboard.css';
import Products from '../Products/Products';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

export const Dashboard = () => {
  return (
    <section >
        <Navbar/>
      
       <h1>Enfermedades y departamentos </h1>
       <PowerBIEmbed embedConfig={
        {
          type: 'report', // Supported types: report, dashboard, tile, visual, and qna.
          id: '380995f3-bbba-45e0-871d-02ee53240b0e',
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=380995f3-bbba-45e0-871d-02ee53240b0e&groupId=3e3cdfea-645d-4100-bbb7-e1f6ec09db78&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVBBQVMtMS1TQ1VTLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQ2M2ZkNjUtYmFjNy00Y2E1LTgzNDctMTJjMjc5YzM0OTRjLyIsImlhdCI6MTY4Njg2NTAzMCwibmJmIjoxNjg2ODY1MDMwLCJleHAiOjE2ODY4NzA0MzMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUE3ZnpWcHRzQmZQSWVWNjFqUklPU3lRdTlNWG51YlpBOGtmeTdzSGpXWVNWOFBJOEJqL09Lck44eFErb2JpVkJ5IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU2NpZW5jZSIsImdpdmVuX25hbWUiOiJEYXRhIiwiaXBhZGRyIjoiMTkwLjE0NS4xNzkuMjE4IiwibmFtZSI6IkRhdGEgU2NpZW5jZSIsIm9pZCI6IjU2OWRjZjA0LTNlYzAtNGM0Ni04OWVkLTM2YzlkMDhiZTJhNiIsInB1aWQiOiIxMDAzMjAwMkE1MzIzRDVCIiwicmgiOiIwLkFWRUFaZjFqX2NlNnBVeURSeExDZWNOSlRBa0FBQUFBQUFBQXdBQUFBQUFBQUFCUkFCSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiI3a3U2VlNxZXhXTHJvVmxvWFlPbEZ1cjR0ZGpMRktmazBXN2s0NXpTNDdFIiwidGlkIjoiZmQ2M2ZkNjUtYmFjNy00Y2E1LTgzNDctMTJjMjc5YzM0OTRjIiwidW5pcXVlX25hbWUiOiJkYXRhLnNjaWVuY2VAYml0Lmluc3RpdHV0ZSIsInVwbiI6ImRhdGEuc2NpZW5jZUBiaXQuaW5zdGl0dXRlIiwidXRpIjoiNWRIWTF5RzNBRTZtM3phdV96SjhBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVzLUVTIn0.s_4PWjbf1cemV_uz8THK9kT89sEI2U5sFXlAaso-M6LP5gzAtYZegyuJsUbgIzMSKEonnAtLJlAQos-vOgPQ-hKVhUMXR5dl5Y0pGgl4dq8b7woZPbthyYKSTkQOzZ7gD3Ss883aJlzFFZWjZZy9rAgoEyNGSVSuxCPvB2PG3cL0XP0ikNISbYL91dFi_vKXZqYzwDw7P-wGP4hfDVpzzgee7QDJRMnya52wWejH9ZLs2ehJzwbc1gztuZ0J4Z6DkNIEKfUbLNTajfaPToNfE5GERbprCz4FpZj3CbYDKqP5gOj2k6XDk9XGocJS-dzBXhScgtz2an6HrWvk2F96Xw',
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad if you're embedding for your organization.
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
          }
        }
      }

        eventHandlers={
          new Map([
            ['loaded', function () {
              console.log('Report loaded');
            }],
            ['rendered', function () {
              console.log('Report rendered');
            }],
            ['error', function (event) {
              console.log(event.detail);
            }]
          ])
        }

        cssClassName={
          "Embed-container"
        }

        getEmbeddedComponent={
          (embeddedReport) => {
            window.report = embeddedReport;
          }
        }>
      </PowerBIEmbed>
    </section>
  )
}
