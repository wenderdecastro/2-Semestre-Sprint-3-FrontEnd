using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace apiweb.eventplus.manha.Migrations
{
    /// <inheritdoc />
    public partial class teste : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ComentarioEvento");

            migrationBuilder.CreateTable(
                name: "ComentariosEvento",
                columns: table => new
                {
                    IdComentarioEvento = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Descricao = table.Column<string>(type: "VARCHAR(200)", nullable: false),
                    Exibe = table.Column<bool>(type: "BIT", nullable: false),
                    IdUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdEvento = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ComentariosEvento", x => x.IdComentarioEvento);
                    table.ForeignKey(
                        name: "FK_ComentariosEvento_Evento_IdEvento",
                        column: x => x.IdEvento,
                        principalTable: "Evento",
                        principalColumn: "IdEvento",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ComentariosEvento_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ComentariosEvento_IdEvento",
                table: "ComentariosEvento",
                column: "IdEvento");

            migrationBuilder.CreateIndex(
                name: "IX_ComentariosEvento_IdUsuario",
                table: "ComentariosEvento",
                column: "IdUsuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ComentariosEvento");

            migrationBuilder.CreateTable(
                name: "ComentarioEvento",
                columns: table => new
                {
                    IdComentarioEvento = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdEvento = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    Exibe = table.Column<bool>(type: "BIT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ComentarioEvento", x => x.IdComentarioEvento);
                    table.ForeignKey(
                        name: "FK_ComentarioEvento_Evento_IdEvento",
                        column: x => x.IdEvento,
                        principalTable: "Evento",
                        principalColumn: "IdEvento",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_ComentarioEvento_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ComentarioEvento_IdEvento",
                table: "ComentarioEvento",
                column: "IdEvento");

            migrationBuilder.CreateIndex(
                name: "IX_ComentarioEvento_IdUsuario",
                table: "ComentarioEvento",
                column: "IdUsuario");
        }
    }
}
